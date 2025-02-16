import { cookies } from "next/headers";
import { GraphQLClientSingleton } from "app/graphql";
import { customerName } from "app/graphql/queries/customerName";
import { deleteAccessToken } from "app/actions/index"

export const validateAccessToken = async () => {

  try {
    const cookieStore = cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    const graphqlClient = GraphQLClientSingleton.getInstance().getClient();

    if (!accessToken) return null;

    const { customer }: any = await graphqlClient.request(customerName, {
      customerAccessToken: accessToken,
    });

    return customer;
  } catch (error) {
    // delete access token from cookies
    await deleteAccessToken()
  }
};

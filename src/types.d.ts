interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

interface Collection {
  id: number;
  handle: string;
  title: string;
  updated_at: string;
  body_html: string;
  published_at: string;
  sort_order: string;
  template_suffix: string;
  disjunctive: boolean;
  rules: Rule[];
  published_scope: string;
  admin_graphql_api_id: string;
}

interface Rule {
  column: string;
  relation: string;
  condition: string;
}

type CartItem = {
  title: string;
  price: string;
  quantity: number;
  id: number;
  image: string;
  merchandiseId: string;
};

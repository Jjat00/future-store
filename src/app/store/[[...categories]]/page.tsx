interface CategoryProps {
  params: {
    categories: string[];
  };
  searchParams?: Record<string, string | string[]>;
}

export default function Category(props: CategoryProps) {
  const { categories } = props.params;
  const { searchParams } = props;

  console.log("searchParams: ", searchParams);

  return (
    <div>
      <h1>Categories: </h1>
      {categories &&
        categories.map((category, index) => (
          <ul key={index}>
            <li>{category}</li>
          </ul>
        ))}
    </div>
  );
}

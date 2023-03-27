import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { slugify } from "../../../../lib/helpers/util";
import { useAppDispatch, useAppSelector } from "../../../../lib/hooks";
import { fetchItemById } from "../../store/actions";
import { selectProductById } from "../../store/selectors";

type ProductParams = {
  id: string | undefined;
};

const ProductPage: React.FC = () => {
  const { id } = useParams<ProductParams>();

  const dispatch = useAppDispatch();
  const product = useAppSelector(selectProductById(id));

  useEffect(() => {
    if (id) {
      dispatch(fetchItemById(id));
    }
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <section>
      <header>
        <Link to={`/category/${slugify(product.category)}`}>Back</Link>
        <h1>{product.title}</h1>
      </header>
      <img alt={`Photo of ${product.title}`} src={product.image} height="300" />
      <p>{product.description}</p>
    </section>
  );
};

export default ProductPage;

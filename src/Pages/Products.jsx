import "../Components/cStyle.css/componentsStyle.css";
import "../style/style.css";
import Wrapper from "../layouts/Wrapper";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoffeData, selectCoffeData } from "../store/productsStore/coffeSlice";
import { fetchTeaData } from "../store/productsStore/teaSlice";
import { fetchEquipmentsData } from "../store/productsStore/equipmentsSlice";
import { useEffect } from "react";
import GenericProducts from "../Components/GenericProducts/GenericProducts";

// # 4  path: /collections/collection-products/product/:productType

function Products() {
  const dispatch = useDispatch();
  // const { productType } = useParams();
  const coffeData = useSelector(selectCoffeData);

  useEffect(() => {
    dispatch(fetchCoffeData());
    dispatch(fetchTeaData);
    dispatch(fetchEquipmentsData);
  }, [dispatch]);

  useEffect(() => {
    // console.log(productType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const allEspressoProducts = coffeData.map((products) => {
    if (products > 0) {
      return products;
    }
    return products.espresso;
  });
  const allFiltruProducts = coffeData.map((products) => {
    if (products > 0) {
      return products;
    }
    return products.filtru;
  });
  const allMicrolotProducts = coffeData.map((products) => {
    if (products > 0) {
      return products;
    }
    return products.microlot;
  });
  return (
    <>
      <Wrapper>
        <GenericProducts
          productDetailsM={allMicrolotProducts}
          productDetailsE={allEspressoProducts}
          productDetailsF={allFiltruProducts}
        />
      </Wrapper>
    </>
  );
}

export default Products;

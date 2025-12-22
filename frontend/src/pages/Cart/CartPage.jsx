import { pageLayout, typography } from "../../styles/uiConfig";

const CartPage = () => {
  return (
    <main className={`${pageLayout.page}`}>
      <section className={`${pageLayout.mainSection}`}>
        <h1 className={`${typography.title}`}>Cart Page</h1>
      </section>
    </main>
  );
};

export default CartPage;

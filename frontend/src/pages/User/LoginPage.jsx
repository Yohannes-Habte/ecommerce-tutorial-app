import { pageLayout, typography } from "../../styles/uiConfig";
import LoginForm from "../../components/forms/LoginForm";

const LoginPage = () => {
  return (
    <main className={`${pageLayout.page}`}>
      <section className={`${pageLayout.mainSection}`}>
        <h1 className={`${typography.title}`}>Login Page</h1>

        <LoginForm />
      </section>
    </main>
  );
};

export default LoginPage;

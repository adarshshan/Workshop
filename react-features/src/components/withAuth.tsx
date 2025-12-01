//Example - Higher Order Component.
const withAuth = (Component: any) => {
  return function ProtectedRoute(props: any) {
    const isLoggedIn = true;

    if (!isLoggedIn) return <h2>Please login</h2>;

    return <Component {...props} />;
  };
};

export default withAuth;

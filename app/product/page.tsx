import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "products",
};

const productPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-screen mx-auto py-0">
        <h1 className="text-2xl font-bold">product list</h1>
      </div>
    </div>
  );
};

export default productPage;

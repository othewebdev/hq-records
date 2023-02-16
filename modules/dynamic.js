import dynamic from "next/dynamic";

export const DynamicHeader = dynamic(() => import("./Header"), {
  loading: () => <h1>Loading...</h1>,
});

export const DynamicFooter = dynamic(() => import("./Footer"), {
  loading: () => "",
});

export const DynamicLogo = dynamic(() => import("./Logo"), {
  loading: () => "",
});

import { FC, PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "./Header";

import { Footer } from "./Footer";

export type TBaseLayoutProps = Record<string, never>;

export const BaseLayout: FC<PropsWithChildren<TBaseLayoutProps>> = () => {
  return (
    <div>
      <Header />

      <main
        className="h-[--content-height] overflow-x-auto"
        data-testid="content"
      >
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

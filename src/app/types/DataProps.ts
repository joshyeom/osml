import { RouterNavigate } from "next/dist/client/components/router-reducer/router-reducer-types";

export interface DataProps {
    name: string;
    imageUrl: string;
    keyword: string;
    id: string
    category: string;
    router: RouterNavigate
  }
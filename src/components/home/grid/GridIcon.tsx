import Image from "next/image";

import { GRID_ICON_URL } from "./constants";

type GridIconProps = {
  className?: string;
};

const GridIcon = ({ className }: GridIconProps) => (
  <Image
    src={GRID_ICON_URL}
    alt=""
    width={1000}
    height={1000}
    className={className}
  />
);

export default GridIcon;

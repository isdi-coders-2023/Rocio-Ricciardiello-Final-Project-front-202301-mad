export interface LivingSpaceStructure {
  m2: number;
  livingspace: string;
  window?: productDetail;
  floor?: productDetail;
  wardrobe?: productDetail;
  walls?: productDetail;
  door?: doorDetail;
}
export type productDetail = {
  m2: string;
  ref: string;
};
export type doorDetail = {
  hand: "right | left";
  ref: string;
};

type DrawerProps = {
  active?: boolean;
};

export default function Drawer({ active }: DrawerProps) {
  return (
    <div
      style={{ width: `${active ? "280px" : "0"}`, backgroundColor: "#ed0" }}
    ></div>
  );
}

import style from "./dropdown-menu.module.scss";

const DropdownMenu: React.FC = () => {
  return (
    <div className={`${style.mainContainer} row position-fixed bg-transparent`}>
      <div className={`${style.overlay} col-0 col-md-4 col-lg-5`}></div>
      <div className={`${style.content} col-12 col-md-8 col-lg-7`}></div>
    </div>
  );
};
export default DropdownMenu;

import React from "react";
import image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";

const styles = {
  header: "",
};

const Header = () => {
  return (
    <div className={container}>
      <div className={leftHeader}>{/* <Image/> */}</div>
      <div className={searchWrapper}>
        <div className={searchInputContainer}>

            
        <AiOutlineSearch className={searchIcon} />
        <div className="searchInputWrapper">
            <input  placeholder="Search.." className={styles.searchInput} />
            {/* hejc */}
        </div>
        
        </div>
      </div>
    </div>
  );
};

export default Header;

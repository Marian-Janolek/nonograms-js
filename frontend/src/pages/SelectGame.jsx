import { useEffect } from "react";
import { Navbar, SelectGame as Select } from "../components";
import { useAppContext } from "../context/appContext";
import { level_url } from "../utils/constants";

const SelectGame = () => {
  const { fetchLevels } = useAppContext();

  useEffect(() => {
    fetchLevels(`${level_url}/all`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="wrapper">
      <Navbar />
      <Select />
    </div>
  );
};

export default SelectGame;

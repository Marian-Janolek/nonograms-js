import { DifficultyMenu } from ".";
import { useAppContext } from "../context/appContext";

const MediumMenu = () => {
  const { levels } = useAppContext();
  return (
    <div>
      <DifficultyMenu
        heading="15 x 15"
        difficulty="medium"
        levels={levels.medium_levels}
      />
    </div>
  );
};

export default MediumMenu;

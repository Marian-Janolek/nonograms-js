import { DifficultyMenu } from ".";
import { useAppContext } from "../context/appContext";

const EasyMenu = () => {
  const { levels } = useAppContext();

  return (
    <div>
      <DifficultyMenu
        heading="10 x 10"
        levels={levels.easy_levels}
        difficulty="easy"
      />
    </div>
  );
};

export default EasyMenu;

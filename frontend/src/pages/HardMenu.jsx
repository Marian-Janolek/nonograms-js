import { DifficultyMenu } from ".";
import { useAppContext } from "../context/appContext";

const HardMenu = () => {
  const { levels } = useAppContext();
  return (
    <div>
      <DifficultyMenu
        heading="20 x 20"
        difficulty="hard"
        levels={levels.hard_levels}
      />
    </div>
  );
};

export default HardMenu;

import { Loading } from "../components";
import { useAppContext } from "../context/appContext";
import { lazy, Suspense } from "react";

const DifficultyMenu = lazy(() => import("./DifficultyMenu"));

const HardMenu = () => {
  const { levels } = useAppContext();
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <DifficultyMenu
          heading="20 x 20"
          difficulty="hard"
          levels={levels.hard_levels}
        />
      </Suspense>
    </div>
  );
};

export default HardMenu;

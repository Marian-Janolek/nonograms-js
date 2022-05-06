import { lazy, Suspense } from "react";
import { Loading } from "../components";
import { useAppContext } from "../context/appContext";

const DifficultyMenu = lazy(() => import("./DifficultyMenu"));

const MediumMenu = () => {
  const { levels } = useAppContext();
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <DifficultyMenu
          heading="15 x 15"
          difficulty="medium"
          levels={levels.medium_levels}
        />
      </Suspense>
    </div>
  );
};

export default MediumMenu;

import { useAppContext } from "../context/appContext";
import { lazy, Suspense } from "react";
import { Loading } from "../components";

const DifficultyMenu = lazy(() => import("./DifficultyMenu"));

const EasyMenu = () => {
  const { levels } = useAppContext();

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <DifficultyMenu
          heading="10 x 10"
          levels={levels.easy_levels}
          difficulty="easy"
        />
      </Suspense>
    </div>
  );
};

export default EasyMenu;

import { useEffect, useMemo, useState } from "react";
import { isMobile } from "react-device-detect";
import ProjectTile from "./ProjectTile";

import { PROJECTS } from "@constants";
import { usePortalStore } from "@stores";

const ProjectsCarousel = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const isActive = usePortalStore((state) => state.activePortalId === "projects");

  useEffect(() => {
    if (!isActive) setActiveId(null);
  }, [isActive]);

  const onClick = (id: number) => {
    if (!isMobile) return;
    setActiveId(id === activeId ? null : id);
  };

  const tiles = useMemo(() => {
    const fov = Math.PI;
    const distance = 13;
    const count = PROJECTS.length;

    return PROJECTS.map((project, i) => {
      // With a single project, angle 0 would sit at x=-13 (off to the side). Use π/2 so the tile sits centered in front of the camera.
      const angle =
        count === 1 ? Math.PI / 2 : (fov / count) * i;
      const z = -distance * Math.sin(angle);
      let x = -distance * Math.cos(angle);
      const rotY = Math.PI / 2 - angle;

      if (project.title === "Product Scanner") {
        x -= 1.5;
      }

      return (
        <ProjectTile
          key={i}
          project={project}
          index={i}
          position={[x, 1, z]}
          rotation={[0, rotY, 0]}
          activeId={activeId}
          onClick={() => onClick(i)}
        />
      );
    });
  }, [activeId, isActive]);

  const groupRotY = PROJECTS.length === 1 ? 0 : -Math.PI / 12;

  return (
    <group rotation={[0, groupRotY, 0]}>
      {tiles}
    </group>
  );
};

export default ProjectsCarousel;
import * as React from "react";
import renderer from "react-test-renderer";
import ProjectCard from "../../components/ProjectCard";
import { mockProjects } from "../../contexts/AppContext";

it("renders ProjectCard correctly", () => {
  const data = mockProjects[0];
  const component = renderer
    .create(<ProjectCard key={data.projectId} data={data} />)
    .toJSON();
  expect(component).toMatchSnapshot();
});

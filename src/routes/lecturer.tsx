import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/lecturer")({
  component: LecturerLayoutWrapper,
});

function LecturerLayoutWrapper() {
  return <Outlet />;
}

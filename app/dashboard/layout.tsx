import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: RecordingState.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-node md:w-64">
        <SideNav />
      </div>
    </div>
  );
}

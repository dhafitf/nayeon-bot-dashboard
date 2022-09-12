export default function DashboardTitle({ title }: { title: string }) {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold">{title}</h2>
      <div className="mt-3 mb-8 h-[2px] rounded bg-[#4E4F50]"></div>
    </div>
  );
}

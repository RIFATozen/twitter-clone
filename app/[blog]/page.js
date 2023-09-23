import HomeContainer from "@/containers/home";

export const generateMetadata = ({ params }) => {
  return {
    title: `${params.blog.charAt(0).toUpperCase() + params.blog.slice(1)} / X`,
    description: "A Next.js app",
  };
};

export default function Home({params}) {

  return (
    <div>
      <HomeContainer params={params} />
    </div>
  );
}

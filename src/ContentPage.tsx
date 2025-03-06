import { Button } from "@carbon/react";



interface ContentProps { title: string; content: string;}       


const Content = ({title,content}: ContentProps) => {
    return (
      <div className="max-w-3xl mx-auto p-6 space-y-6 text-white">
        <h1 className="text-3xl font-bold">Understanding Next.js, React, Vite, TypeScript, and Tailwind CSS</h1>
  
        <section>
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p>
           {content}
          </p>
          
          <Button className="mt-3.5" kind="primary">Learn More</Button>
   
        </section>
        
      </div>

    );
  };
  
  export default Content;
  
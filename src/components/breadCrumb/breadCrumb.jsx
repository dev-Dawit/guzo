import React from "react";
import { Breadcrumb } from "antd";
import { useLocation, Link } from "react-router-dom";

export const BreadCrumbSection = ({ separator}) => {
    
//   const location = useLocation();
//   const pathSnippets = location.pathname.split("/").filter((i) => i);

//   const getTitleFromPath = (snippet) => {
//     // Convert hyphens to spaces
//     const title = snippet.replace(/-/g, ' ');
  
//     // Capitalize first letter of each word
//     const words = title.split(' ');
//     const capitalizedWords = words.map(word => {
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     });
  
//     return capitalizedWords.join(' ');
//   }
  
//   const breadcrumbItems = pathSnippets.map((snippet, index) => {
//     const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
//     const title = getTitleFromPath(snippet); // A helper function to get the title from the path segment


//     return (
//       <Breadcrumb separator=">">
//       <Breadcrumb.Item href="/">
//         <span>Home</span>
//       </Breadcrumb.Item>
//       <Breadcrumb.Item href="/destination">
//         <span>Destination</span>
//       </Breadcrumb.Item>
//       <Breadcrumb.Item href="/trip">
//         <span>Trip</span>
//       </Breadcrumb.Item>
//       <Breadcrumb.Item href="/transporter">
//         <span>transporter</span>
//       </Breadcrumb.Item>
//       <Breadcrumb.Item href="/passenger">
//         <span>passenger</span>
//       </Breadcrumb.Item>
//       <Breadcrumb.Item href="/finance">
//         <span>finance</span>
//       </Breadcrumb.Item>
//       {/*<Breadcrumb.Item>John Doe</Breadcrumb.Item>*/}
//     </Breadcrumb>
//     );
//   });

//   //return <Breadcrumb>{breadcrumbItems}</Breadcrumb>;
// }


  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter((i) => i);

  const breadcrumbItems = pathSnippets.map((snippet, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{snippet}</Link>
      </Breadcrumb.Item>
    );
  });

  return <Breadcrumb separator={separator}>{breadcrumbItems}</Breadcrumb>;
};


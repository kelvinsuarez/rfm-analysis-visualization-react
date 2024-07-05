import React, { useEffect } from 'react';

const TableauVisualization = () => {
  useEffect(() => {
    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    scriptElement.async = true;

    const divElement = document.getElementById('viz1720194417326');
    const vizElement = divElement.getElementsByTagName('object')[0];

    const adjustVizSize = () => {
      if (divElement.offsetWidth > 800) {
        vizElement.style.width = '100%';
        vizElement.style.height = divElement.offsetWidth * 0.75 + 'px';
      } else if (divElement.offsetWidth > 500) {
        vizElement.style.width = '100%';
        vizElement.style.height = divElement.offsetWidth * 0.75 + 'px';
      } else {
        vizElement.style.width = '100%';
        vizElement.style.height = '1477px';
      }
    };

    adjustVizSize();
    window.addEventListener('resize', adjustVizSize);

    vizElement.parentNode.insertBefore(scriptElement, vizElement);

    return () => {
      window.removeEventListener('resize', adjustVizSize);
    };
  }, []);

  return (
    <div
      className="tableauPlaceholder tableau-data"
      id="viz1720194417326"
      style={{ position: 'relative' }}
    >
      <noscript>
        <a href="#">
          <img
            alt="Dashboard 1"
            src="https://public.tableau.com/static/images/Da/Dashboard_sprint_12/Dashboard1/1_rss.png"
            style={{ border: 'none' }}
          />
        </a>
      </noscript>
      <object className="tableauViz" style={{ display: 'none' }}>
        <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
        <param name="embed_code_version" value="3" />
        <param name="site_root" value="" />
        <param name="name" value="Dashboard_sprint_12/Dashboard1" />
        <param name="tabs" value="no" />
        <param name="toolbar" value="yes" />
        <param
          name="static_image"
          value="https://public.tableau.com/static/images/Da/Dashboard_sprint_12/Dashboard1/1.png"
        />
        <param name="animate_transition" value="yes" />
        <param name="display_static_image" value="yes" />
        <param name="display_spinner" value="yes" />
        <param name="display_overlay" value="yes" />
        <param name="display_count" value="yes" />
        <param name="language" value="en-US" />
      </object>
    </div>
  );
};

export default TableauVisualization;
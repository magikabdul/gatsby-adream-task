import React from 'react';
import PropTypes from 'prop-types';
import 'src/styles/global-styles.scss'

const MainLayout = ({ children }) => {
  return(
    <main>
      <header>
        header section
      </header>
      <section>
        {children}
      </section>
      <footer>
        footer
      </footer>
    </main>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout;

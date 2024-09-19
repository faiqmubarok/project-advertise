import { useEffect } from 'react';
import propTypes from 'prop-types';

const ChangeTitle = ({ title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return null; 
};

ChangeTitle.propTypes = {
  title: propTypes.string
};

export default ChangeTitle;

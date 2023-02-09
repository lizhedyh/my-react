import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../actions';

function Link(props) {
  let { active, children, onClick } = props;

  if (active) {
    return <b className="filter selected">{children}</b>;
  }
  return (
    <a
      href="#"
      className="filter no-selected"
      onClick={
        e => {
          e.preventDefault();
          onClick();
        }
      }
    >
      {children}
    </a>
  );
}

Link.propTypes = {
  // active: PropTypes.bool.isRequired,
  // children: PropTypes.node.isRequired,
  // onClick: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    active: state.filter === ownProps.filter,
  };
}

function mapDisptchToProps(dispatch, ownProps) {
  return {
    onClick: () => {
      dispatch(setFilter(ownProps.filter));
    },
  };
}

export default connect(mapStateToProps, mapDisptchToProps)(Link);

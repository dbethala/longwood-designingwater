import React from 'react';
import { Link } from 'react-router-dom';

class TitleText extends React.Component {
    render () {
        return (
        <h3 className="site-title">
            <Link id="designing-water-header-text" to="/" style= {{whiteSpace: 'nowrap', color: this.props.navTextColor}}>Designing Water</Link>
        </h3>
        );
    }
}

export default TitleText;
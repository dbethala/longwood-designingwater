import React from 'react';

class Title extends React.Component {
    render() {
        return (
            <div>
                <h1 className={'pageTitle ' + this.props.className}>
                    {this.props.title}
                </h1>
            </div>
        );
    }
}

export default Title;
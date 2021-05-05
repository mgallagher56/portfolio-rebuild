import React, { Component } from 'react';

export default class LongCard extends Component {

    static defaultProps = {
        title: 'Title',
        subtitle: 'Subtitle',
        body: 'Body ',
    }

    render() {
        let imageSrc = null !== this.props.module.image.localFile.childImageSharp ?
        this.props.module.image.localFile.childImageSharp.fluid.srcWebp : this.props.module.image.localFile.publicURL;
        
        return <div class={'card long-card row col-12 p-0 mb-3 mx-auto'}>
            <div class={'card-media col-6 col-md-7 h-100 p-0'}>
                <img class={'img-fluid'} src={imageSrc} alt={''} />
            </div>
            <div class={'card-content col-6 col-md-5 p-2'}>
                <h3>{this.props.module.title}</h3>
                <h4>{this.props.module.subtitle}</h4>
                <div dangerouslySetInnerHTML={{__html: this.props.module.content }}></div>
            </div>
        </div>
    }
}
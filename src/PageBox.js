import * as React from 'react'
import {
    withInitialProps,
    query,
    BodyRenderer
} from "@phenomic/preset-react-app/lib/client";

import Layout from "./Layout";
import PageError from "./PageError";
import ActivityIndicator from "./ActivityIndicator";

import data from '../content/boxes/data.json'
import '../static/boxStyle.css'

class PageBox extends React.PureComponent<props, void> {

    constructor(props) {
        super(props)
    }
    static async getInitialProps(){

    }
    render(){
        const { status } = this.props;
        return status === "error" ? (
            <PageError error={this.props.error} />
        ) : (
                <React.Fragment>
                    <Layout
                        title={"Punica Boxes"}
                        image=""
                        classAttr={"box-layout"}
                    >
                        {status === "loading" && <ActivityIndicator />}
                        {status === "ready" && (
                        <div class="box-container">
                            <ul>
                                {data.map((item,index) => 
                                    <li key={index} class="box-item">
                                        <h3 class="box-title">{item.title}</h3>
                                        {item.github && <a href={item.github} target="_blank">Github</a> }
                                        <p>{item.desc}</p>

                                        <div class="box-tags">
                                            {item.tags.map((tag) => (
                                                <span>{tag}</span>
                                            ))}
                                        </div>
                                        
                                        {(item.logo && <img src={item.logo} class="box-logo" />)}
                                    </li>
                                )}
                            </ul>     
                        </div>)}
                    </Layout>    
                </React.Fragment>
        )

    }
}

export default withInitialProps(PageBox)
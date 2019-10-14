import React from 'react'
import getdata from '../actions/getData'
import { connect } from 'react-redux';

class SearchList extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [],
        }
    }

    componentDidMount = async () => {
        const data = await this.props.getdata();
        this.setState({ data })

        console.log(data);

    }

    render() {
        return (
            <div>
                {this.state.data.map((key, index) => {
                    return (
                        <div>
                            <a
                                href={key.external_urls.spotify}
                            >
                                <img
                                    src={key.album.images && key.album.images[1].url}
                                    alt='new'
                                />
                            </a>

                            <p>{key.name}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default (connect(null, { getdata })(SearchList));
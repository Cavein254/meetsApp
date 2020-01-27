import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getMeets } from '../../actions/meets';
export class Meets extends Component {
    static propTypes = {
        meets: PropTypes.array.isRequired
    }

    componentDidMount() {
        this.props.getMeets();
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <table className="table table-stripped">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>type</th>
                            <th>body</th>
                            <th>likes</th>
                            <th>created_at</th>
                            <th>updated_at</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.meets.map(meet => (
                            <tr key={meet.id}>
                                <td>{meet.type}</td>
                                <td>{meet.body}</td>
                                <td>{meet.likes}</td>
                                <td>{meet.created_at}</td>
                                <td>{meet.updated_at}</td>
                                <td><button>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    meets: state.meets.meets
})

export default connect(mapStateToProps, { getMeets })(Meets);
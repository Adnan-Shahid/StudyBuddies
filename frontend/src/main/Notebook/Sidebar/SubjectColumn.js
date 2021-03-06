import React, { Component } from 'react';
import "../Styles.css";
import SubjectItem from './SubjectItem'
import { Droppable } from "react-beautiful-dnd";
import { Button } from 'semantic-ui-react';

class SubjectColumn extends Component {
    render() {
        return (
            <div className="subjectColumn">
                <Droppable droppableId={'subjects'}>
                    {(provided, snapshot) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className="itemContainer"
                        >
                            {
                                this.props.subjects.map((subject, index) => 
                                    <SubjectItem
                                        key={subject._id + index}
                                        click={this.props.click}
                                        subject={subject}
                                        index={index}
                                        edit={this.props.edit}
                                        saveName={this.props.saveName}
                                        delete={this.props.delete}
                                    />
                                )
                            }
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                <div className="addSubject">
                    <Button onClick={this.props.create} className="add">+ Subject</Button>
                </div>
            </div>
        )
    }
}

export default SubjectColumn;

import React from 'react';
import { Component } from 'react';
import Form from 'react-bootstrap/Form';
import './DropOptions.css';

class DropOptions extends Component
{
    render()
    {
        return(
            <Form className="dropTags">
                <Form.Group controlID="example.Form.SelectCustomSizeSm">
                    <Form.Label>Tags</Form.Label>
                    <Form.Control as="select" size="sm" custom>
                        <option id="dropdownOP">1</option>
                        <option id="dropdownOP">2</option>
                        <option id="dropdownOP">3</option>
                        <option id="dropdownOP">4</option> {/* you can upload the emojis here the same way you've been uploading emojis with importing */}
                    </Form.Control>
                </Form.Group>
            </Form>
        )
    }
}

export default DropOptions;

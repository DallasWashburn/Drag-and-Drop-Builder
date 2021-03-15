import React, { Component } from "react"
import InlineEdit from "../../inlineEdit"

class Contact3 extends Component {
    render() {
        return (
            <section className="contact_4 section__wrapper">
                <div className="container">
                    <div className="section__heading text-center">
                        <h2><InlineEdit text={this.props.contactHeading} onSetText={text => this.props.getContactInfo(text)}/></h2>
                        <p><InlineEdit text={this.props.contactSubText} onSetText={text => this.props.getContactInfo(undefined, text)}/></p>
                    </div>
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="contact_3_form section__form">
                                <div className="section__form_wrapper">

                                <div className='gf_browser_chrome gform_wrapper'  >
                                        <div  className='gform_anchor' >
                                        </div>
                                        <form method='post'  target='gform_ajax_frame_1'  action='/SMB/contact/#gf_1'>
                                            <div className='gform_body'>
                                                <ul  className='gform_fields top_label form_sublabel_below description_below'>
                                                    <li  className='gfield gfield_contains_required field_sublabel_below field_description_below hidden_label gfield_visibility_visible' >
                                                        <label className='gfield_label'  ></label>
                                                        <div className='ginput_container ginput_container_text'>
                                                            <input name='input_1'  type='text' className='large' placeholder='Name*' aria-required="true" aria-invalid="false" />
                                                        </div>
                                                    </li>
                                                    <li  className='gfield gfield_contains_required field_sublabel_below field_description_below hidden_label gfield_visibility_visible' >
                                                        <label className='gfield_label'  ></label>
                                                        <div className='ginput_container ginput_container_email'>
                                                            <input name='input_2'  type='text' className='medium' placeholder='Email*' aria-required="true" aria-invalid="false" />
                                                        </div>
                                                    </li>
                                                    <li  className='gfield gfield_contains_required field_sublabel_below field_description_below hidden_label gfield_visibility_visible' >
                                                        <label className='gfield_label'  ></label>
                                                        <div className='ginput_container ginput_container_phone'>
                                                            <input name='input_3'  type='text' className='large' placeholder='Phone*' aria-required="true" aria-invalid="false" />
                                                        </div>
                                                    </li>
                                                    <li  className='gfield gfield_contains_required field_sublabel_below field_description_below hidden_label gfield_visibility_visible' >
                                                        <label className='gfield_label'  ></label>
                                                        <div className='ginput_container ginput_container_textarea'>
                                                            <textarea name='input_4'  className='textarea large' placeholder='Message*' aria-required="true" aria-invalid="false" rows='10' cols='50'>
                                                            </textarea>
                                                        </div>

                                                    </li>
                                                </ul>
                                            </div>
                                            <div className='gform_footer top_label'>
                                                <input type='submit'  className='gform_button button' />
                                                <input type='hidden' className='gform_hidden' name='is_submit_1' />
                                                <input type='hidden' className='gform_hidden' name='gform_submit' />

                                                <input type='hidden' className='gform_hidden' name='gform_unique_id' />
                                                <input type='hidden' className='gform_hidden' name='state_1' />
                                                <input type='hidden' className='gform_hidden' name='gform_target_page_number_1'  />
                                                <input type='hidden' className='gform_hidden' name='gform_source_page_number_1'  />
                                                <input type='hidden' name='gform_field_values' />

                                            </div>
                                        </form>
                                    </div>
                                    <iframe style={{
                                        display: "none", width: "0px",
                                        height: "0px"
                                    }} src='about:blank' name='gform_ajax_frame_1' title='This iframe contains the logic required to handle Ajax powered Gravity Forms.'></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


export default Contact3
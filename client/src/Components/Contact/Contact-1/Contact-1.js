import React, { Component } from "react"
import InlineEdit from "../../inlineEdit"


class Contact1 extends Component {
    render() {
        return (
            <section className="contact_2 section__wrapper">
                <div className="container">
                    <div className="section__heading text-center">
                        <h2><InlineEdit text={this.props.contactHeading} onSetText={text => this.props.getContactInfo(text)} /></h2>
                        <InlineEdit text={this.props.contactSubText} onSetText={text => this.props.getContactInfo(undefined, text)} />
                    </div>
                    <div className="row align-items-center flex-row-reverse">
                        <div className="col-md-6">
                            <div className="contact__iframe map-responsive">
                                <iframe title="map2" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13284.447635013606!2d-112.1124225!3d33.6542621!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xefe25fe92d40af5f!2sCyberMark!5e0!3m2!1sen!2sus!4v1614899612265!5m2!1sen!2sus" width="600" height="450" loading="lazy"></iframe>				</div>
                        </div>
                        <div className="col-md-6">
                            <div className="contact_2_form section__form">
                                <div className="section__form_wrapper">

                                    <div className='gf_browser_chrome gform_wrapper' >
                                        <div  className='gform_anchor' >
                                        </div>
                                        <form method='post' >
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
                                                        <label className='gfield_label'  >
                                                        </label>
                                                        <div className='ginput_container ginput_container_textarea'>
                                                            <textarea name='input_4'  className='textarea large' placeholder='Message*' aria-required="true" aria-invalid="false" rows='10' cols='50'></textarea>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className='gform_footer top_label'>
                                                <input type='submit'  className='gform_button button' />
                                                <input type='hidden' name='gform_ajax' />
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
                                    }} src='about:blank' name='gform_ajax_frame_1'  title='This iframe contains the logic required to handle Ajax powered Gravity Forms.'></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


export default Contact1
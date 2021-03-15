import React, { Component } from "react"
import InlineEdit from "../../inlineEdit"


class Contact2 extends Component {
    render() {
        return (
            <section class="contact_3 section__wrapper">
                <div class="container">
                    <div class="section__heading text-center">
                        <h2><InlineEdit text={this.props.contactHeading} onSetText={text => this.props.getContactInfo(text)} /></h2>
                        <p><InlineEdit text={this.props.contactSubText} onSetText={text => this.props.getContactInfo(undefined, text)} /></p>
                    </div>
                    <div class="row align-items-center flex-row-reverse">
                        <div class="col-md-6">
                            <div class="contact__details">
                                <span class="h3 d-block">Address</span>
                                <span class="details d-block"><InlineEdit text={this.props.address} onSetText={text => this.props.getContactInfo(undefined, undefined, text)} /></span>
                                <span class="mt-3 h3 d-block">Phone</span>
                                <span class="details d-block"><InlineEdit text={this.props.phoneNumber} onSetText={text => this.props.getContactInfo(undefined, undefined, undefined, text)} /></span>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="contact_3_form section__form">
                                <div class="section__form_wrapper">

                                    <div class='gf_browser_chrome gform_wrapper'  >
                                        <div  class='gform_anchor' >
                                        </div>
                                        <form method='post' >
                                            <div class='gform_body'>
                                                <ul  class='gform_fields top_label form_sublabel_below description_below'>
                                                    <li  class='gfield gfield_contains_required field_sublabel_below field_description_below hidden_label gfield_visibility_visible' >
                                                        <label class='gfield_label' ></label>
                                                        <div class='ginput_container ginput_container_text'>
                                                            <input name='input_1'  type='text' class='large' placeholder='Name*' aria-required="true" aria-invalid="false" />
                                                        </div>
                                                    </li>
                                                    <li  class='gfield gfield_contains_required field_sublabel_below field_description_below hidden_label gfield_visibility_visible' >
                                                        <label class='gfield_label' forHtml='input_1_2' ></label>
                                                        <div class='ginput_container ginput_container_email'>
                                                            <input name='input_2'  type='text' class='medium' placeholder='Email*' aria-required="true" aria-invalid="false" />
                                                        </div>
                                                    </li>
                                                    <li  class='gfield gfield_contains_required field_sublabel_below field_description_below hidden_label gfield_visibility_visible' >
                                                        <label class='gfield_label' forHtml='input_1_3' ></label>
                                                        <div class='ginput_container ginput_container_phone'>
                                                            <input name='input_3'  type='text' class='large' placeholder='Phone*' aria-required="true" aria-invalid="false" />
                                                        </div>
                                                    </li>
                                                    <li  class='gfield gfield_contains_required field_sublabel_below field_description_below hidden_label gfield_visibility_visible' >
                                                        <label class='gfield_label' forHtml='input_1_4' ></label>
                                                        <div class='ginput_container ginput_container_textarea'>
                                                            <textarea name='input_4'  class='textarea large' placeholder='Message*' aria-required="true" aria-invalid="false" rows='10' cols='50'>
                                                            </textarea>
                                                        </div>

                                                    </li>
                                                </ul>
                                            </div>
                                            <div class='gform_footer top_label'>
                                                <input type='submit'  class='gform_button button' />
                                                <input type='hidden' class='gform_hidden' name='is_submit_1' />
                                                <input type='hidden' class='gform_hidden' name='gform_submit' />

                                                <input type='hidden' class='gform_hidden' name='gform_unique_id' />
                                                <input type='hidden' class='gform_hidden' name='state_1' />
                                                <input type='hidden' class='gform_hidden' name='gform_target_page_number_1'  />
                                                <input type='hidden' class='gform_hidden' name='gform_source_page_number_1'  />
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


export default Contact2
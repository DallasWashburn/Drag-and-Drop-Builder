import React, { Component } from "react"
import InlineEdit from "../../inlineEdit"
import ImageButton from "../../imageButton/imageButton"

class Contact0 extends Component {
    render() {
        return (
            <section class="contact_1 section__wrapper">
                <div class="container">
                    <div class="row flex-row-reverse">
                        <div class="col-md-6">
                            <div class="contact__iframe map-responsive">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13284.447635013606!2d-112.1124225!3d33.6542621!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xefe25fe92d40af5f!2sCyberMark!5e0!3m2!1sen!2sus!4v1614899612265!5m2!1sen!2sus" width="600" height="450"  allowfullscreen="" loading="lazy"></iframe>				</div>
                        </div>
                        <div class="col-md-6">
                            <div class="section__container">
                                <div class="section__content">
                                    <h2><InlineEdit text={this.props.contactHeading} onSetText={text => this.props.getContactInfo(text)}/></h2>
                                    <p><InlineEdit text={this.props.contactSubText} onSetText={text => this.props.getContactInfo(undefined, text)}/></p>
                                </div>
                            </div>
                            <div class="contact_1_form section__form">
                                <div class="section__form_wrapper">

                                    <div class='gf_browser_chrome gform_wrapper' id='gform_wrapper_1' ><div id='gf_1' class='gform_anchor' tabindex='-1'></div><form method='post' enctype='multipart/form-data' target='gform_ajax_frame_1' id='gform_1' action='/SMB/contact/#gf_1'>
                                        <div class='gform_body'><ul id='gform_fields_1' class='gform_fields top_label form_sublabel_below description_below'><li id='field_1_1' class='gfield gfield_contains_required field_sublabel_below field_description_below hidden_label gfield_visibility_visible' ><label class='gfield_label' for='input_1_1' ></label><div class='ginput_container ginput_container_text'><input name='input_1' id='input_1_1' type='text' value='' class='large' tabindex='49' placeholder='Name*' aria-required="true" aria-invalid="false" /></div></li><li id='field_1_2' class='gfield gfield_contains_required field_sublabel_below field_description_below hidden_label gfield_visibility_visible' ><label class='gfield_label' for='input_1_2' ></label><div class='ginput_container ginput_container_email'>
                                            <input name='input_2' id='input_1_2' type='text' value='' class='medium' tabindex='50' placeholder='Email*' aria-required="true" aria-invalid="false" />
                                        </div></li><li id='field_1_3' class='gfield gfield_contains_required field_sublabel_below field_description_below hidden_label gfield_visibility_visible' ><label class='gfield_label' for='input_1_3' ></label><div class='ginput_container ginput_container_phone'><input name='input_3' id='input_1_3' type='text' value='' class='large' tabindex='51' placeholder='Phone*' aria-required="true" aria-invalid="false" /></div></li><li id='field_1_4' class='gfield gfield_contains_required field_sublabel_below field_description_below hidden_label gfield_visibility_visible' ><label class='gfield_label' for='input_1_4' ></label><div class='ginput_container ginput_container_textarea'><textarea name='input_4' id='input_1_4' class='textarea large' tabindex='52' placeholder='Message*' aria-required="true" aria-invalid="false" rows='10' cols='50'></textarea></div></li>
                                        </ul></div>
                                        <div class='gform_footer top_label'> <input type='submit' id='gform_submit_button_1' class='gform_button button' value='Submit' tabindex='53' onclick='if(window["gf_submitting_1"]){return false;}  window["gf_submitting_1"]=true;  ' onkeypress='if( event.keyCode == 13 ){ if(window["gf_submitting_1"]){return false;} window["gf_submitting_1"]=true;  jQuery("#gform_1").trigger("submit",[true]); }' /> <input type='hidden' name='gform_ajax' value='form_id=1&amp;title=&amp;description=&amp;tabindex=49' />
                                            <input type='hidden' class='gform_hidden' name='is_submit_1' value='1' />
                                            <input type='hidden' class='gform_hidden' name='gform_submit' value='1' />

                                            <input type='hidden' class='gform_hidden' name='gform_unique_id' value='' />
                                            <input type='hidden' class='gform_hidden' name='state_1' value='WyJbXSIsImNhNWJkYWM0OGU3NjVlYTcwNjhkMTMwZDIyMzYwZDMyIl0=' />
                                            <input type='hidden' class='gform_hidden' name='gform_target_page_number_1' id='gform_target_page_number_1' value='0' />
                                            <input type='hidden' class='gform_hidden' name='gform_source_page_number_1' id='gform_source_page_number_1' value='' />
                                            <input type='hidden' name='gform_field_values' value='' />

                                        </div>
                                    </form>
                                    </div>
                                    <iframe style={{
                                        display: "none", width: "0px",
                                        height: "0px"
                                    }} src='about:blank' name='gform_ajax_frame_1' id='gform_ajax_frame_1' title='This iframe contains the logic required to handle Ajax powered Gravity Forms.'></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


export default Contact0
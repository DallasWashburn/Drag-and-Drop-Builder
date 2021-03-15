import React, { Component } from "react"
import "./Intro1.css"
import InlineEdit from "../../inlineEdit"

class Intro1 extends Component {
    render() {
        return (
            <section className="intro_2 section__wrapper">
                <div className="container">
                    <div className="row align-items-center flex-row-reverse">
                        <div className="col-md-6">
                            <div className="intro_2_form section__form">
                                <div className="section__form_wrapper">

                                    <div className='gf_browser_chrome gform_wrapper' id='gform_wrapper_1' >
                                        <div id='gf_1' className='gform_anchor' tabIndex='-1'></div>
                                        <form method='post'  target='gform_ajax_frame_1' id='gform_1' action='/SMB/intro/#gf_1'>
                                            <div className='gform_body'>
                                                <ul id='' className='gform_fields top_label form_sublabel_below description_below'>
                                                    <li id='field_1_1' className='gfield gfield_contains_required field_sublabel_below field_description_below hidden_label gfield_visibility_visible' >
                                                        <label className='gfield_label'  ></label>
                                                        <div className='ginput_container ginput_container_text'>
                                                            <input name='input_1' id='input_1_1' type='text' className='large' tabIndex='49' placeholder='Name*' aria-required="true" aria-invalid="false" />
                                                        </div>
                                                    </li>
                                                    <li id='field_1_2' className='gfield gfield_contains_required field_sublabel_below field_description_below hidden_label gfield_visibility_visible' >
                                                        <label className='gfield_label'  ></label>
                                                        <div className='ginput_container ginput_container_email'>
                                                            <input name='input_2' id='input_1_2' type='text' className='medium' tabIndex='50' placeholder='Email*' aria-required="true" aria-invalid="false" />
                                                        </div>
                                                    </li>
                                                    <li id='field_1_3' className='gfield gfield_contains_required field_sublabel_below field_description_below hidden_label gfield_visibility_visible' >
                                                        <label className='gfield_label'  ></label>
                                                        <div className='ginput_container ginput_container_phone'>
                                                            <input name='input_3' id='input_1_3' type='text' className='large' tabIndex='51' placeholder='Phone*' aria-required="true" aria-invalid="false" />
                                                        </div>
                                                    </li>
                                                    <li id='field_1_4' className='gfield gfield_contains_required field_sublabel_below field_description_below hidden_label gfield_visibility_visible' >
                                                        <label className='gfield_label' ></label>
                                                        <div className='ginput_container ginput_container_textarea'>
                                                            <textarea name='input_4' id='input_1_4' className='textarea large' tabIndex='52' placeholder='Message*' aria-required="true" aria-invalid="false" rows='10' cols='50'></textarea>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className='gform_footer top_label'>
                                                <input type='submit' id='gform_submit_button_1' className='gform_button button' /> <input type='hidden' name='gform_ajax' />
                                                <input type='hidden' className='gform_hidden' name='is_submit_1' />
                                                <input type='hidden' className='gform_hidden' name='gform_submit' />

                                                <input type='hidden' className='gform_hidden' name='gform_unique_id' />
                                                <input type='hidden' className='gform_hidden' name='state_1' />
                                                <input type='hidden' className='gform_hidden' name='gform_target_page_number_1' id='gform_target_page_number_1' />
                                                <input type='hidden' className='gform_hidden' name='gform_source_page_number_1' id='gform_source_page_number_1' />
                                                <input type='hidden' name='gform_field_values' />

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
                        <div className="col-md-6">
                            <div className="section__container">
                                <div className="section__content">
                                    <h2><InlineEdit text={this.props.introHeading} onSetText={text => this.props.getIntroInfo(text)} /></h2>
                                    <h3><InlineEdit text={this.props.introSubHeading} onSetText={text => this.props.getIntroInfo(undefined, text)} /></h3>
                                    <p><InlineEdit text={this.props.introSubtext} onSetText={text => this.props.getIntroInfo(undefined, undefined, text)} /></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


export default Intro1
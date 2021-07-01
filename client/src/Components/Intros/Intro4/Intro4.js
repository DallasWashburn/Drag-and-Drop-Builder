import React, { Component } from "react"
import "./Intro4.css"
import InlineEdit from "../../inlineEdit"


class Intro4 extends Component {
    render() {
        return (
            <section className="intro_5 section__wrapper">
                <div className="container">
                    <div className="section__container text-center">
                        <div className="section__content">
                            <h2><InlineEdit text={this.props.introHeading} onSetText={text => this.props.getIntroInfo(text)} /></h2>
                            <h3><InlineEdit text={this.props.introSubHeading} onSetText={text => this.props.getIntroInfo(undefined, text)} /></h3>
                            <InlineEdit text={this.props.introSubtext} onSetText={text => this.props.getIntroInfo(undefined, undefined, text)} />
                        </div>
                    </div>
                    <div className="section__form">
                        <div className="section__form_wrapper section__form-short">

                            <div className='gf_browser_chrome gform_wrapper'  >
                                <div  className='gform_anchor' >
                                </div>
                                <form method='post' enctype='multipart/form-data' target='gform_ajax_frame_2'  action='/SMB/intro/#gf_2'>
                                    <div className='gform_body'>
                                        <ul  className='gform_fields top_label form_sublabel_below description_below'>
                                            <li className='gfield gfield_contains_required field_sublabel_below field_description_below hidden_label gfield_visibility_visible' >
                                                <div className='ginput_container ginput_container_text'>
                                                    <input name='input_1' type='text' className='large'  placeholder='Name*' aria-required="true" aria-invalid="false" />
                                                </div>
                                            </li>
                                            <li  className='gfield gfield_contains_required field_sublabel_below field_description_below hidden_label gfield_visibility_visible' >
                                                <div className='ginput_container ginput_container_email'>
                                                    <input name='input_2'  type='text' className='medium'  placeholder='Email*' aria-required="true" aria-invalid="false" />
                                                </div>
                                            </li>
                                            <li  className='gfield gform_validation_container field_sublabel_below field_description_below gfield_visibility_visible' >
                                                <div className='ginput_container'>
                                                </div>
                                                <div className='gfield_description'>

                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='gform_footer top_label'>
                                        <input type='submit'  className='gform_button button' />
                                        <input type='hidden' />
                                        <input type='hidden' className='gform_hidden' />
                                        <input type='hidden' className='gform_hidden' />

                                        <input type='hidden' className='gform_hidden' />
                                        <input type='hidden' className='gform_hidden' />
                                        <input type='hidden' className='gform_hidden'  />
                                        <input type='hidden' className='gform_hidden'  />
                                        <input type='hidden' name='gform_field_values' />

                                    </div>
                                </form>
                            </div>
                            <iframe style={{
                                display: "none", width: "0px",
                                height: "0px"
                            }} src='about:blank' name='gform_ajax_frame_2' title='This iframe contains the logic required to handle Ajax powered Gravity Forms.'></iframe>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


export default Intro4
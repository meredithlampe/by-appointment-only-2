import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div id="wrapper" class="home-container">
        <nav class="navbar navbar-default navbar-static-top" role="navigation" style={{marginBottom: 0}}>
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="index.html">By Appointment Only</a>
            </div>

            <ul class="nav navbar-top-links navbar-right">
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i class="fa fa-question fa-fw"></i> <i class="fa fa-caret-down"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-alerts">
                        <li>
                            <a href="#">
                                <div>
                                    <i class="fa fa-comment fa-fw"></i> Contact Us
                                </div>
                            </a>
                        </li>
                    </ul>
                </li>
                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i class="fa fa-user fa-fw"></i> <i class="fa fa-caret-down"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-user">
                        <li  id="sign-out-button"><i class="fa fa-sign-out fa-fw"></i>
                            Sign Out
                        </li>
                    </ul>
                </li>
            </ul>

            <div class="navbar-default sidebar" role="navigation">
                <div class="sidebar-nav navbar-collapse">
                    <ul class="nav" id="side-menu">
                        <li class="home-tab">
                            <a><i class="fa fa-dashboard fa-fw"></i> Home</a>
                        </li>
                        <li class="appointments-tab">
                            <a><i class="fa fa-clock-o fa-fw"></i> Appointments</a>
                        </li>
                        <li class="calendar-tab">
                            <a><i class="fa fa-table fa-fw"></i> Calendar</a>
                        </li>
                        <li class="applicant-forms-tab">
                            <a><i class="fa fa-edit fa-fw"></i> Applicant Forms</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div id="page-wrapper">
          <div class="home">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-header">Home</h1>
                </div>
            </div>
            <div class="row">
            </div>
          </div>
          <div class="appointments hidden">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-header">Appointments</h1>
                </div>
            </div>
            <div class="row">
            </div>
          </div>
          <div class="calendar hidden">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="page-header">Calendar</h1>
                </div>
            </div>
            <div class="row">
            </div>
          </div>
          <div class="applicant-forms hidden">
            <div class="applicant-forms-home">
              <div class="row">
                  <div class="col-lg-12">
                      <h1 class="page-header">Applicant Forms</h1>
                  </div>
              </div>
              <div class="row">
                  <div class="col-lg-12">
                      <div class="panel panel-default">
                          <div class="panel-body">
                            <table width="100%" class="table table-striped table-bordered table-hover" id="dataTables-example">
                                <div class="well">
                                    <p>Forms created by you for clients applying to your studio.</p>
                                </div>
                                <div>
                                  <button type="button" class="create-form-button btn btn-outline btn-default">Create Form</button>
                                </div>
                                <thead>
                                    <tr>
                                        <th>Form Name</th>
                                        <th>Date Created</th>
                                        <th>Submissions</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                        <th>Share</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="odd gradeX">
                                        <td>Sample Form</td>
                                        <td>10-31-2018</td>
                                        <td>80</td>
                                        <td class="center"><a>Edit</a></td>
                                        <td class="center"><a>Delete</a></td>
                                        <td class="center"><a>Share</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <div class="applicant-forms-create-form">
            <div class="row">
              <div class="col-lg-12 create-form-header">
                <h2 class="page-header">Create Form<small style={{marginLeft: 20}}><a class='create-form-cancel'>Cancel</a></small><button type="button" class="save-form-button btn btn-primary">Save</button></h2>
              </div>
              <div class="col-lg-8">
                <p class="lead">Drag elements from the component library on the left into your form on the right. Elements can be rearranged by dragging them up and down within the form.</p>
              </div>
            </div>


            <div class="row">
              <div class="col-lg-12">
                <div class="panel">
                  <div class="panel-body">
                    <div class="create-form-input-area">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="applicant-forms-preview-form">
            <div class="row">
              <div class="col-lg-12">
                <div class="panel">
                  <div class="panel-body">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>  
    </div>
      </div>
    );
  }
}

export default App;

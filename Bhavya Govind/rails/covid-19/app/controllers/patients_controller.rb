class PatientsController < ApplicationController
  def index
    @patients = Patient.all
  end

  def show
    @patient = Patient.find params[:id]
  end

  def new
  end

  def create
    patient = Patient.create :name => params[:name], :date_of_joining => params[:date_of_joining], :date_of_discarge => params[:date_of_discarge], :city_name => params[:city_name], :cause => params[:cause]
    redirect_to patient_path(patient.id)
  end

  def edit
    @patient = Patient.find params[:id]
  end

  def update
    patient = Patient.find params[:id]
    patient.name = params[:name]
    patient.date_of_joining = params[:date_of_joining]
    patient.date_of_discarge = params[:date_of_discarge]
    patient.city_name = params[:city_name]
    patient.cause = params[:cause]
    patient.save
    redirect_to patient_path(patient.id)
  end

  def delete
    patient = Patient.find params[:id]
    patient.destroy
    redirect_to patients_path
  end
end

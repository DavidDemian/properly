import React, { useState, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import ProperlyLogo from '../assets/images/ProperlyLogo.jsx';

const steps = [
  'Agent Info',
  'Branding Preferences',
  'Domain Setup',
  'Review & Submit',
];

const colorThemes = [
  { name: 'Navy & White', colors: ['#001f3f', '#ffffff'] },
  { name: 'Charcoal & Teal', colors: ['#36454F', '#20B2AA'] },
  { name: 'Gold & Black', colors: ['#FFD700', '#000000'] },
  { name: 'Sky Blue & White', colors: ['#87CEEB', '#ffffff'] },
  { name: 'Custom', colors: ['#3496ff', '#ffffff'], isCustom: true },
];

function ProgressBar({ step }) {
  return (
    <div className="flex items-center justify-center mb-8">
      {steps.map((label, idx) => (
        <React.Fragment key={label}>
          <div className={`flex flex-col items-center ${idx < step ? 'text-primary' : 'text-gray-400'}`}> 
            <div className={`w-8 h-8 flex items-center justify-center rounded-full font-bold border-2 ${idx <= step ? 'border-primary bg-primary text-white' : 'border-gray-300 bg-white'}`}>{idx + 1}</div>
            <span className="text-xs mt-2 font-serif text-center w-20">{label}</span>
          </div>
          {idx < steps.length - 1 && <div className={`w-8 h-1 ${idx < step ? 'bg-primary' : 'bg-gray-200'}`}></div>}
        </React.Fragment>
      ))}
    </div>
  );
}

function AgentInfo({ register, errors }) {
  return (
    <div className="space-y-6">
      <div>
        <label className="block font-serif text-lg mb-1">Full Name <span className="text-primary">*</span></label>
        <input {...register('fullName', { required: 'Full name is required' })} className="w-full px-4 py-2 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-primary/30 font-body bg-transparent" />
        {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
      </div>
      <div>
        <label className="block font-serif text-lg mb-1">Email <span className="text-primary">*</span></label>
        <input type="email" {...register('email', { required: 'Email is required' })} className="w-full px-4 py-2 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-primary/30 font-body bg-transparent" />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>
      <div>
        <label className="block font-serif text-lg mb-1">Phone Number <span className="text-primary">*</span></label>
        <input type="tel" {...register('phone', { required: 'Phone number is required' })} className="w-full px-4 py-2 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-primary/30 font-body bg-transparent" />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
      </div>
      <div>
        <label className="block font-serif text-lg mb-1">Brokerage Name</label>
        <input {...register('brokerage')} className="w-full px-4 py-2 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-primary/30 font-body bg-transparent" />
      </div>
    </div>
  );
}

function BrandingPreferences({ register, setValue, watch }) {
  const selectedTheme = watch('colorTheme');
  return (
    <div className="space-y-6">
      <div>
        <label className="block font-serif text-lg mb-1">Color Theme</label>
        <div className="flex gap-6 flex-wrap mb-4">
          {colorThemes.map((theme) => (
            <button
              key={theme.name}
              type="button"
              className={`w-16 h-16 rounded-full border-4 flex flex-col items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-primary/40 ${selectedTheme === theme.name ? 'border-primary scale-110' : 'border-gray-200'}`}
              style={{ background: `linear-gradient(135deg, ${theme.colors[0]}, ${theme.colors[1]})` }}
              onClick={() => setValue('colorTheme', theme.name)}
            >
              {selectedTheme === theme.name && (
                <span className="text-white text-2xl font-bold">✓</span>
              )}
            </button>
          ))}
        </div>
        <div className="flex gap-6 flex-wrap mb-2">
          {colorThemes.map((theme) => (
            <span key={theme.name} className="block w-16 text-xs text-center font-serif mt-1 text-gray-700">{theme.name}</span>
          ))}
        </div>
      </div>
      <div>
        <label className="block font-serif text-lg mb-1">Upload Logo (optional)</label>
        <input type="file" accept="image/*" {...register('logo')} className="w-full px-4 py-2 rounded-2xl border border-gray-300 font-body bg-transparent" />
      </div>
      <div>
        <label className="block font-serif text-lg mb-1">Upload Headshot (optional)</label>
        <input type="file" accept="image/*" {...register('headshot')} className="w-full px-4 py-2 rounded-2xl border border-gray-300 font-body bg-transparent" />
      </div>
      <div>
        <label className="block font-serif text-lg mb-1">Tagline / Motto (optional)</label>
        <input {...register('tagline')} className="w-full px-4 py-2 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-primary/30 font-body bg-transparent" />
      </div>
    </div>
  );
}

function DomainSetup({ register, watch, setValue }) {
  const hasDomain = watch('hasDomain');
  return (
    <div className="space-y-6">
      <div>
        <label className="block font-serif text-lg mb-1">Do you already have a domain?</label>
        <div className="flex gap-6 mt-2">
          <label className="inline-flex items-center font-body">
            <input type="radio" value="yes" {...register('hasDomain', { required: true })} className="form-radio text-primary" />
            <span className="ml-2">Yes</span>
          </label>
          <label className="inline-flex items-center font-body">
            <input type="radio" value="no" {...register('hasDomain', { required: true })} className="form-radio text-primary" />
            <span className="ml-2">No</span>
          </label>
        </div>
      </div>
      {hasDomain === 'yes' && (
        <div>
          <label className="block font-serif text-lg mb-1">Enter your domain</label>
          <input {...register('domain')} className="w-full px-4 py-2 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-primary/30 font-body bg-transparent" />
        </div>
      )}
      {hasDomain === 'no' && (
        <div className="mt-2">
          <label className="inline-flex items-center font-body">
            <input type="checkbox" {...register('helpRegisterDomain')} className="form-checkbox text-primary" />
            <span className="ml-2">Help me register one</span>
          </label>
        </div>
      )}
    </div>
  );
}

function ReviewSubmit({ getValues }) {
  const values = getValues();
  return (
    <div className="space-y-6">
      <h2 className="font-serif text-2xl mb-4">Review your info</h2>
      <div className="bg-gray-50 rounded-2xl p-4 shadow-inner">
        <div className="mb-2"><span className="font-semibold">Full Name:</span> {values.fullName}</div>
        <div className="mb-2"><span className="font-semibold">Email:</span> {values.email}</div>
        <div className="mb-2"><span className="font-semibold">Phone:</span> {values.phone}</div>
        <div className="mb-2"><span className="font-semibold">Brokerage:</span> {values.brokerage || <span className="text-gray-400">(none)</span>}</div>
        <div className="mb-2"><span className="font-semibold">Color Theme:</span> {values.colorTheme === 'Custom' ? `${values.customPrimary} / ${values.customSecondary}` : values.colorTheme || <span className="text-gray-400">(none)</span>}</div>
        <div className="mb-2"><span className="font-semibold">Tagline:</span> {values.tagline || <span className="text-gray-400">(none)</span>}</div>
        <div className="mb-2"><span className="font-semibold">Domain:</span> {values.hasDomain === 'yes' ? values.domain : values.hasDomain === 'no' && values.helpRegisterDomain ? 'Need help registering' : <span className="text-gray-400">(none)</span>}</div>
      </div>
      <p className="text-gray-500 text-sm mt-4">We'll contact you within 24 hours to finalize setup.</p>
    </div>
  );
}

function ContactFormModal({ open, onClose }) {
  if (!open) return null;
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const onSubmit = async (data) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://formspree.io/f/mnnvppjd', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setSubmitted(true);
        reset();
      } else {
        setError('There was a problem submitting your message. Please try again.');
      }
    } catch (err) {
      setError('There was a problem submitting your message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-0 max-w-md w-full relative">
      <button className="absolute top-2 right-2 text-gray-400 hover:text-primary text-2xl" onClick={onClose}>&times;</button>
      <h2 className="text-2xl font-bold mb-4 text-primary">Let Us Guide You</h2>
      {submitted ? (
        <div className="text-center py-8">
          <h3 className="font-serif text-xl text-primary mb-2">Thank you!</h3>
          <p className="text-gray-700">We'll reach out soon to help you get started.</p>
          <button onClick={onClose} className="mt-6 px-6 py-2 rounded-lg bg-primary text-white font-semibold shadow hover:bg-primary/90 transition">Done</button>
        </div>
      ) : (
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block font-serif text-lg mb-1">Name <span className="text-primary">*</span></label>
            <input {...register('name', { required: true })} className="w-full px-4 py-2 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-primary/30 font-body bg-transparent" required />
            {errors.name && <p className="text-red-500 text-sm mt-1">Name is required.</p>}
          </div>
          <div>
            <label className="block font-serif text-lg mb-1">Email <span className="text-primary">*</span></label>
            <input type="email" {...register('email', { required: true })} className="w-full px-4 py-2 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-primary/30 font-body bg-transparent" required />
            {errors.email && <p className="text-red-500 text-sm mt-1">Email is required.</p>}
          </div>
          <div>
            <label className="block font-serif text-lg mb-1">Phone (optional)</label>
            <input type="tel" {...register('phone')} className="w-full px-4 py-2 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-primary/30 font-body bg-transparent" />
          </div>
          <div>
            <label className="block font-serif text-lg mb-1">Services Interested In</label>
            <div className="flex flex-wrap gap-2">
              <label className="inline-flex items-center"><input type="checkbox" value="IDX site" {...register('services')} className="form-checkbox text-primary" /> <span className="ml-2">IDX site</span></label>
              <label className="inline-flex items-center"><input type="checkbox" value="tapCard" {...register('services')} className="form-checkbox text-primary" /> <span className="ml-2">tapCard</span></label>
              <label className="inline-flex items-center"><input type="checkbox" value="Tour" {...register('services')} className="form-checkbox text-primary" /> <span className="ml-2">Tour</span></label>
              <label className="inline-flex items-center"><input type="checkbox" value="Staging" {...register('services')} className="form-checkbox text-primary" /> <span className="ml-2">Staging</span></label>
              <label className="inline-flex items-center"><input type="checkbox" value="Other" {...register('services')} className="form-checkbox text-primary" /> <span className="ml-2">Other</span></label>
            </div>
          </div>
          <div>
            <label className="block font-serif text-lg mb-1">Message</label>
            <textarea {...register('message', { required: true })} className="w-full px-4 py-2 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-primary/30 font-body bg-transparent" rows="4"></textarea>
          </div>
          {error && <div className="text-red-500 text-center mt-2">{error}</div>}
          <button type="submit" className="w-full bg-primary text-white font-semibold py-2 rounded-lg mt-2 hover:bg-primary/90 transition" disabled={loading}>{loading ? 'Sending...' : 'Send Inquiry'}</button>
        </form>
      )}
    </div>
  );
}

const OnboardingWizard = ({ setShowWizard }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    brokerage: '',
    colorTheme: '',
    logo: null,
    headshot: null,
    tagline: '',
    domainType: '',
    domain: '',
    existingDomain: false,
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const methods = useForm({ defaultValues: formData });
  const { handleSubmit, watch, setValue } = methods;
  const domainType = watch('domainType');
  const existingDomain = watch('existingDomain');
  const logo = watch('logo');
  const headshot = watch('headshot');
  const [logoPreview, setLogoPreview] = useState(null);
  const [headshotPreview, setHeadshotPreview] = useState(null);
  const [showCancelConfirm, setShowCancelConfirm] = useState(false);

  const handleCancel = () => {
    setShowCancelConfirm(true);
  };

  const confirmCancel = () => {
    setShowCancelConfirm(false);
    // Reset form and close wizard
    setFormData({
      name: '',
      email: '',
      phone: '',
      brokerage: '',
      colorTheme: '',
      logo: null,
      headshot: null,
      tagline: '',
      domainType: '',
      domain: '',
      existingDomain: false,
    });
    setCurrentStep(0);
    // Close the wizard modal
    setShowWizard(false);
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setValue('logo', file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleHeadshotChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setValue('headshot', file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setHeadshotPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = async (data) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://formspree.io/f/xdkzeekw', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setSubmitted(true);
      } else {
        setError('There was a problem submitting your form. Please try again.');
      }
    } catch (err) {
      setError('There was a problem submitting your form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <h3 className="font-serif text-2xl text-primary mb-4">Thank you!</h3>
        <p className="text-gray-700 mb-6">We'll be in touch soon to discuss your project.</p>
        <button onClick={() => setShowWizard(false)} className="px-6 py-2 rounded-lg bg-primary text-white font-semibold shadow hover:bg-primary/90 transition">Done</button>
      </div>
    );
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <ProgressBar step={currentStep} />
        {currentStep === 0 && <AgentInfo />}
        {currentStep === 1 && <BrandingPreferences logoPreview={logoPreview} headshotPreview={headshotPreview} onLogoChange={handleLogoChange} onHeadshotChange={handleHeadshotChange} />}
        {currentStep === 2 && <DomainSetup />}
        {currentStep === 3 && <ReviewSubmit formData={methods.getValues()} />}
        <div className="flex justify-between pt-4">
          {currentStep > 0 && (
            <button type="button" onClick={prevStep} className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 font-semibold shadow hover:bg-gray-50 transition">Back</button>
          )}
          {currentStep < steps.length - 1 ? (
            <button type="button" onClick={nextStep} className="px-6 py-2 rounded-lg bg-primary text-white font-semibold shadow hover:bg-primary/90 transition">Next</button>
          ) : (
            <button type="submit" className="px-6 py-2 rounded-lg bg-primary text-white font-semibold shadow hover:bg-primary/90 transition" disabled={loading}>{loading ? 'Submitting...' : 'Submit'}</button>
          )}
          <button type="button" onClick={handleCancel} className="px-6 py-2 rounded-lg border border-red-500 text-red-500 font-semibold shadow hover:bg-red-50 transition">Cancel</button>
        </div>
        {error && <div className="text-red-500 text-center mt-2">{error}</div>}
      </form>
    </FormProvider>
  );
};

const OnboardingWizardModal = ({ open, onClose }) => {
  if (!open) return null;
  const [step, setStep] = useState(0);
  const { register, handleSubmit, formState: { errors }, getValues, setValue, watch } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      brokerage: '',
      colorTheme: '',
      customPrimary: '#3496ff',
      customSecondary: '#ffffff',
      logo: null,
      headshot: null,
      tagline: '',
      hasDomain: '',
      domain: '',
      helpRegisterDomain: false,
    }
  });
  const selectedTheme = watch('colorTheme');
  const customPrimary = watch('customPrimary');
  const customSecondary = watch('customSecondary');
  const hasDomain = watch('hasDomain');
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [flipped, setFlipped] = useState(false);

  const onNext = () => setStep((s) => s + 1);
  const onBack = () => setStep((s) => s - 1);

  const onSubmit = async (data) => {
    setLoading(true);
    setSubmitError(null);
    try {
      const response = await fetch('https://formspree.io/f/xdkzeekw', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setSubmitted(true);
      } else {
        setSubmitError('There was a problem submitting your info. Please try again.');
      }
    } catch (err) {
      setSubmitError('There was a problem submitting your info. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-xl p-0 relative">
      <button className="absolute top-2 right-2 text-gray-400 hover:text-primary text-2xl" onClick={onClose}>&times;</button>
      <h2 className="text-2xl font-bold mb-4 text-primary">Onboarding Wizard</h2>
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        {step === 0 && (
          <>
            <div>
              <label className="block font-serif text-lg mb-1">Full Name <span className="text-primary">*</span></label>
              <input {...register('name', { required: true })} className="w-full px-4 py-2 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-primary/30 font-body bg-transparent" />
              {errors.name && <p className="text-red-500 text-sm mt-1">Name is required.</p>}
            </div>
            <div>
              <label className="block font-serif text-lg mb-1">Email <span className="text-primary">*</span></label>
              <input type="email" {...register('email', { required: true })} className="w-full px-4 py-2 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-primary/30 font-body bg-transparent" />
              {errors.email && <p className="text-red-500 text-sm mt-1">Email is required.</p>}
            </div>
            <div>
              <label className="block font-serif text-lg mb-1">Phone</label>
              <input type="tel" {...register('phone')} className="w-full px-4 py-2 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-primary/30 font-body bg-transparent" />
            </div>
            <div>
              <label className="block font-serif text-lg mb-1">Brokerage</label>
              <input {...register('brokerage')} className="w-full px-4 py-2 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-primary/30 font-body bg-transparent" />
            </div>
          </>
        )}
        {step === 1 && (
          <>
            <div>
              <label className="block font-serif text-lg mb-1">Color Theme</label>
              <div className="flex gap-6 flex-wrap mb-4">
                {colorThemes.map((theme) => (
                  <button
                    key={theme.name}
                    type="button"
                    className={`w-16 h-16 rounded-full border-4 flex flex-col items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-primary/40 ${selectedTheme === theme.name ? 'border-primary scale-110' : 'border-gray-200'}`}
                    style={{ background: theme.isCustom && selectedTheme === 'Custom'
                      ? `linear-gradient(135deg, ${customPrimary}, ${customSecondary})`
                      : `linear-gradient(135deg, ${theme.colors[0]}, ${theme.colors[1]})` }}
                    onClick={() => setValue('colorTheme', theme.name)}
                  >
                    {selectedTheme === theme.name && (
                      <span className="text-white text-2xl font-bold">✓</span>
                    )}
                  </button>
                ))}
              </div>
              <div className="flex gap-6 flex-wrap mb-2">
                {colorThemes.map((theme) => (
                  <span key={theme.name} className="block w-16 text-xs text-center font-serif mt-1 text-gray-700">{theme.name}</span>
                ))}
              </div>
              {selectedTheme === 'Custom' && (
                <div className="flex flex-col sm:flex-row gap-4 mt-4 items-center">
                  <div>
                    <label className="block text-sm font-medium mb-1">Primary Color</label>
                    <input type="color" {...register('customPrimary')} value={customPrimary} onChange={e => setValue('customPrimary', e.target.value)} className="w-12 h-12 p-0 border-none bg-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Secondary Color</label>
                    <input type="color" {...register('customSecondary')} value={customSecondary} onChange={e => setValue('customSecondary', e.target.value)} className="w-12 h-12 p-0 border-none bg-transparent" />
                  </div>
                  <div className="flex flex-col items-center ml-4">
                    <span className="text-xs mb-1">Preview</span>
                    <div className="w-12 h-12 rounded-full border-4 border-primary" style={{ background: `linear-gradient(135deg, ${customPrimary}, ${customSecondary})` }}></div>
                  </div>
                </div>
              )}
            </div>
            <div>
              <label className="block font-serif text-lg mb-1">Upload Logo (optional)</label>
              <input type="file" accept="image/*" {...register('logo')} className="w-full px-4 py-2 rounded-2xl border border-gray-300 font-body bg-transparent" />
            </div>
            <div>
              <label className="block font-serif text-lg mb-1">Upload Headshot (optional)</label>
              <input type="file" accept="image/*" {...register('headshot')} className="w-full px-4 py-2 rounded-2xl border border-gray-300 font-body bg-transparent" />
            </div>
            <div>
              <label className="block font-serif text-lg mb-1">Tagline / Motto (optional)</label>
              <input {...register('tagline')} className="w-full px-4 py-2 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-primary/30 font-body bg-transparent" />
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <div>
              <label className="block font-serif text-lg mb-1">Do you already have a domain?</label>
              <div className="flex gap-6 mt-2">
                <label className="inline-flex items-center font-body">
                  <input type="radio" value="yes" {...register('hasDomain', { required: true })} className="form-radio text-primary" />
                  <span className="ml-2">Yes</span>
                </label>
                <label className="inline-flex items-center font-body">
                  <input type="radio" value="no" {...register('hasDomain', { required: true })} className="form-radio text-primary" />
                  <span className="ml-2">No</span>
                </label>
              </div>
            </div>
            {hasDomain === 'yes' && (
              <div className="mt-4">
                <label className="block font-serif text-lg mb-1">Enter your domain</label>
                <input {...register('domain')} className="w-full px-4 py-2 rounded-2xl border border-gray-300 focus:ring-2 focus:ring-primary/30 font-body bg-transparent" />
              </div>
            )}
            {hasDomain === 'no' && (
              <div className="mt-4">
                <label className="inline-flex items-center font-body">
                  <input type="checkbox" {...register('helpRegisterDomain')} className="form-checkbox text-primary" />
                  <span className="ml-2">Help me register one</span>
                </label>
              </div>
            )}
          </>
        )}
        {step === 3 && (
          <>
            <h3 className="font-serif text-xl mb-4">Review your info</h3>
            <div className="bg-gray-50 rounded-2xl p-4 shadow-inner space-y-2">
              <div><span className="font-semibold">Full Name:</span> {getValues('name')}</div>
              <div><span className="font-semibold">Email:</span> {getValues('email')}</div>
              <div><span className="font-semibold">Phone:</span> {getValues('phone')}</div>
              <div><span className="font-semibold">Brokerage:</span> {getValues('brokerage') || <span className="text-gray-400">(none)</span>}</div>
              <div><span className="font-semibold">Color Theme:</span> {getValues('colorTheme') === 'Custom' ? `${getValues('customPrimary')} / ${getValues('customSecondary')}` : getValues('colorTheme') || <span className="text-gray-400">(none)</span>}</div>
              <div><span className="font-semibold">Tagline:</span> {getValues('tagline') || <span className="text-gray-400">(none)</span>}</div>
              <div><span className="font-semibold">Domain:</span> {getValues('hasDomain') === 'yes' ? getValues('domain') : getValues('hasDomain') === 'no' && getValues('helpRegisterDomain') ? 'Need help registering' : <span className="text-gray-400">(none)</span>}</div>
            </div>
            <p className="text-gray-500 text-sm mt-4">We'll contact you within 24 hours to finalize setup.</p>
          </>
        )}
        <div className="flex justify-between pt-4">
          {step > 0 && step < 3 && (
            <button type="button" onClick={onBack} className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 font-semibold shadow hover:bg-gray-50 transition">Back</button>
          )}
          {step < 3 && (
            <button type="button" onClick={onNext} className="px-6 py-2 rounded-lg bg-primary text-white font-semibold shadow hover:bg-primary/90 transition">Next</button>
          )}
          {step === 3 && (
            <button type="submit" className="px-6 py-2 rounded-lg bg-primary text-white font-semibold shadow hover:bg-primary/90 transition" disabled={loading}>{loading ? 'Submitting...' : 'Submit'}</button>
          )}
        </div>
        {submitError && <div className="text-red-500 text-center mt-2">{submitError}</div>}
      </form>
    </div>
  );
};

const GetStartedPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  const [showWizard, setShowWizard] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-transparent px-2 py-8">
      <div className="w-full flex justify-center mb-8 mt-4">
        <Link to="/">
          <ProperlyLogo className="w-48 sm:w-64 md:w-80 max-w-full h-auto cursor-pointer" />
        </Link>
      </div>
      <div className="w-full max-w-xl flex flex-col items-center mx-auto px-2 sm:px-4">
        <motion.div
          initial={{ rotateY: 0 }}
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          style={{ transformStyle: 'preserve-3d' }}
          className="w-full"
        >
          <div style={{ backfaceVisibility: 'hidden' }}>
            {!(showWizard || showContact) && (
              <motion.section
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="w-full flex flex-col items-center"
              >
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4 text-primary">Are you ready to have your digital brand crafted?</h1>
                <p className="text-lg text-gray-700 text-center mb-8 max-w-lg">
                  Do you know exactly what you want in terms of colors, logo, details, etc.? If so, you can use our onboarding wizard. If not, just send us a quick message and we'll help you get started.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 mb-8 w-full max-w-md justify-center">
                  <button
                    className="w-full sm:w-auto px-8 py-4 rounded-lg bg-primary text-white font-semibold text-lg shadow-lg"
                    onClick={() => { setShowWizard(true); setShowContact(false); setFlipped(true); }}
                  >
                    I Know What I Want
                  </button>
                  <button
                    className="w-full sm:w-auto px-8 py-4 rounded-lg border-2 border-primary text-primary font-semibold text-lg bg-white shadow"
                    onClick={() => { setShowContact(true); setShowWizard(false); setFlipped(true); }}
                  >
                    I Need Guidance
                  </button>
                </div>
                <button
                  onClick={() => navigate('/')}
                  className="px-6 py-2 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary/10 transition-all duration-200"
                >
                  ← Go Back
                </button>
              </motion.section>
            )}
          </div>
          <div style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
            {showWizard && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.3 }}
                className="w-full flex justify-center items-center mt-8 mb-8"
              >
                <div className="w-full max-w-xl">
                  <OnboardingWizardModal open={true} onClose={() => { setShowWizard(false); setFlipped(false); }} />
                </div>
              </motion.div>
            )}
            {showContact && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.3 }}
                className="w-full flex justify-center items-center mt-8 mb-8"
              >
                <div className="w-full max-w-md">
                  <ContactFormModal open={true} onClose={() => { setShowContact(false); setFlipped(false); }} />
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GetStartedPage; 
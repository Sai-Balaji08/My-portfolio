import test from 'node:test';
import assert from 'node:assert/strict';
import { CERTIFICATES_DATA, filterCertificates } from './certificates.ts';

test('CERTIFICATES_DATA contains all 13 verified and pending credentials', () => {
  assert.equal(CERTIFICATES_DATA.length, 13);

  const verified = CERTIFICATES_DATA.filter(c => c.statusType === 'verified');
  const pending = CERTIFICATES_DATA.filter(c => c.statusType === 'pending');

  assert.equal(verified.length, 12);
  assert.equal(pending.length, 1);
});

test('Mandatory certificate sources are all present as distinct entries', () => {
  // 1. SIH — 2 separate certificates
  const sihCerts = CERTIFICATES_DATA.filter(c => c.id.startsWith('cert-sih-'));
  assert.equal(sihCerts.length, 2, 'SIH must have 2 separate certificate entries');
  assert.ok(sihCerts.some(c => c.id === 'cert-sih-internal'));
  assert.ok(sihCerts.some(c => c.id === 'cert-sih-national'));

  // 2. CMR — Certificates related to CMR events
  const cmrCerts = CERTIFICATES_DATA.filter(c => c.id.includes('cmr'));
  assert.ok(cmrCerts.length >= 1, 'CMR event certificate must be present');

  // 3. KL University — Certificates related to KL events
  const klCerts = CERTIFICATES_DATA.filter(c => c.id.includes('kl-university'));
  assert.ok(klCerts.length >= 1, 'KL University certificate must be present');

  // 4. IARE — Certificates related to college events and activities
  const iareCerts = CERTIFICATES_DATA.filter(c => c.categoryKeys.includes('iare'));
  assert.ok(iareCerts.length >= 3, 'IARE college activities and leadership must be present');

  // 5. SoloLearn — Programming and technical learning certificates
  const soloCerts = CERTIFICATES_DATA.filter(c => c.id.includes('sololearn'));
  assert.ok(soloCerts.length >= 2, 'SoloLearn programming certificates must be present');
});

test('filterCertificates filters by status type correctly', () => {
  const verifiedList = filterCertificates(CERTIFICATES_DATA, 'verified', '');
  assert.equal(verifiedList.length, 12);
  assert.ok(verifiedList.every(c => c.statusType === 'verified'));

  const pendingList = filterCertificates(CERTIFICATES_DATA, 'pending', '');
  assert.equal(pendingList.length, 1);
  assert.ok(pendingList.every(c => c.statusType === 'pending'));
  assert.ok(pendingList.every(c => c.verificationStatus === 'Certificate file required'));
});

test('filterCertificates filters by category correctly', () => {
  const sihResults = filterCertificates(CERTIFICATES_DATA, 'sih-hackathons', '');
  assert.ok(sihResults.length >= 3); // SIH Internal, SIH National, HackIndia Spark-11, etc.

  const cmrKlResults = filterCertificates(CERTIFICATES_DATA, 'cmr-kl', '');
  assert.equal(cmrKlResults.length, 2); // CMR and KL University

  const iareResults = filterCertificates(CERTIFICATES_DATA, 'iare', '');
  assert.ok(iareResults.length >= 3);

  const soloResults = filterCertificates(CERTIFICATES_DATA, 'sololearn', '');
  assert.ok(soloResults.length >= 2);
});

test('filterCertificates searches across title, issuer, skills, and source', () => {
  const searchSih = filterCertificates(CERTIFICATES_DATA, 'all', 'Smart India Hackathon');
  assert.equal(searchSih.length, 2);

  const searchCmr = filterCertificates(CERTIFICATES_DATA, 'all', 'CMR');
  assert.equal(searchCmr.length, 1);

  const searchKl = filterCertificates(CERTIFICATES_DATA, 'all', 'KL University');
  assert.equal(searchKl.length, 1);

  const searchSolo = filterCertificates(CERTIFICATES_DATA, 'all', 'SoloLearn');
  assert.equal(searchSolo.length, 2);

  const searchPython = filterCertificates(CERTIFICATES_DATA, 'all', 'Python');
  assert.ok(searchPython.length >= 1);
});
